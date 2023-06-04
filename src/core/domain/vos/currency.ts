export class Currency {
  private value = 0;

  public constructor(value: number) {
    this.value = value;
  }

  public static build(value: number): Currency {
    return new Currency(value);
  }

  public getValue() {
    const value = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    return value.format(this.value);
  }
}
