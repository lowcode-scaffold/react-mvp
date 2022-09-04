import { delUser, fetchUserList } from './api';
import { Model } from './model';

export default class Service {
  private static _indstance: Service | null = null;

  private model: Model;

  static single(model: Model) {
    if (!Service._indstance) {
      Service._indstance = new Service(model);
    }
    return Service._indstance;
  }

  constructor(model: Model) {
    this.model = model;
  }

  async getUserList() {
    if (this.model.loading) {
      return;
    }
    this.model.setLoading(true);
    const res = await fetchUserList({
      page: this.model.pagination.page,
      size: this.model.pagination.size,
      name: this.model.filterForm.name,
    }).catch(() => {});
    if (res) {
      this.model.setUserList(res.result.rows);
      this.model.setPagination((s) => {
        s.total = res.result.total;
      });
      this.model.setLoading(false);
    }
  }

  changePage(page: number, pageSize: number) {
    if (pageSize !== this.model.pagination.size) {
      this.model.setPagination((s) => {
        s.page = 1;
        s.size = pageSize;
      });
      this.model.setRunFetch(this.model.runFetch + 1);
    } else {
      this.model.setPagination((s) => {
        s.page = page;
      });
      this.model.setRunFetch(this.model.runFetch + 1);
    }
  }

  changeFilterForm(name: string, value: any) {
    this.model.setFilterForm((s: any) => {
      s[name] = value;
    });
  }

  resetForm() {
    this.model.setFilterForm({} as any);
    this.model.setPagination((s) => {
      s.page = 1;
    });
    this.model.setRunFetch(this.model.runFetch + 1);
  }

  doSearch() {
    this.model.setPagination((s) => {
      s.page = 1;
    });
    this.model.setRunFetch(this.model.runFetch + 1);
  }

  edit(data: Model['modalInfo']['data']) {
    this.model.setModalInfo((s) => {
      s.action = 'edit';
      s.data = data;
      s.visible = true;
      s.title = '编辑';
    });
  }

  async del(id: number) {
    this.model.setLoading(true);
    await delUser({ id }).finally(() => {
      this.model.setLoading(false);
    });
  }
}
