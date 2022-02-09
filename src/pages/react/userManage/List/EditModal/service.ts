import { createUser, editUser } from '../api';
import { Model } from './model';

export default class Service {
  private model: Model;

  constructor(model: Model) {
    this.model = model;
  }

  init(data: Model['data']) {
    this.model.setData(data || ({} as any));
    if (data && data.tags) {
      this.model.settagOptions(
        data.tags.map((s) => ({
          label: s,
          value: s,
        })),
      );
    } else {
      this.model.settagOptions([]);
    }
  }

  changeForm(name: string, value: any) {
    this.model.setData((s: any) => {
      s[name] = value;
    });
  }

  async createUser() {
    this.model.setLoading(true);
    await createUser({
      name: this.model.data!.name,
      age: this.model.data!.age,
      mobile: this.model.data!.mobile,
      tags: this.model.data?.tags,
      address: this.model.data?.address,
    }).finally(() => {
      this.model.setLoading(false);
    });
  }

  async editUser() {
    this.model.setLoading(true);
    await editUser({
      name: this.model.data!.name,
      age: this.model.data!.age,
      mobile: this.model.data!.mobile,
      tags: this.model.data?.tags,
      address: this.model.data?.address,
      id: this.model.data!.id,
    }).finally(() => {
      this.model.setLoading(false);
    });
  }
}
