export class Course {
  constructor(
    private readonly _id: string,
    private readonly title: string,
    private readonly description: string,
    private readonly percentCompleted: number
  ) {}

  public getId(): string {
    return this._id;
  }
  public getTitle(): string {
    return this.title;
  }
  public getDescription(): string {
    return this.description;
  }
  public getPercentCompleted(): number {
    return this.percentCompleted;
  }
}
