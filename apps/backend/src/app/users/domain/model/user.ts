import { Course } from './course';

export class User {
  constructor(
    private readonly _id: string,
    private readonly isOnline: boolean,
    private readonly name: string,
    private readonly avatar: string,
    private readonly lastName: string,
    private readonly username: string,
    private readonly email: string,
    private readonly phone: string,
    private readonly inscriptionDate: Date,
    private readonly courses: Course[] | []
  ) {}

  public getId(): string {
    return this._id;
  }
  public getIsOnline(): boolean {
    return this.isOnline;
  }
  public getName(): string {
    return this.name;
  }
  public getAvatar(): string {
    return this.avatar;
  }
  public getLastName(): string {
    return this.lastName;
  }
  public getUsername(): string {
    return this.username;
  }
  public getEmail(): string {
    return this.email;
  }
  public getPhone(): string {
    return this.phone;
  }
  public getInscriptionDate(): Date {
    return this.inscriptionDate;
  }
  public getCourses(): Course[] | [] {
    return this.courses;
  }
}
