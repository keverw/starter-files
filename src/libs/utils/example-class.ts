/**
 * Demo class to test ESLint member accessibility and ordering rules.
 * Members are ordered: public fields → protected → private → constructor → public methods → protected → private
 */
export class ExampleClass {
  // Public fields first
  public name: string;
  public readonly id: number;

  // Protected fields second
  protected status: string;

  // Private fields third
  private secret: string;
  private isInitialized: boolean;

  // Constructor after fields
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
    this.status = 'active';
    this.secret = 'hidden';
    this.isInitialized = true;
  }

  // Public methods first
  public getName(): string {
    return this.name;
  }

  public getID(): number {
    return this.id;
  }

  // Protected methods second
  protected getStatus(): string {
    return this.status;
  }

  // Private methods last
  private getSecret(): string {
    return this.secret;
  }

  private checkInitialized(): boolean {
    return this.isInitialized;
  }
}
