export class Randomizer {
  public static readonly operators: string[] = ['+', '-', '*', '/'];

  public static generateRandomArithmeticOperation(): string {
    const operand1 = Math.floor((Math.random() * 9) + 1);
    const operand2 = Math.floor((Math.random() * 9) + 1);
    const operator = this.operators[Math.floor((Math.random() * this.operators.length))];
    return operand1 + operator + operand2;
  }

  public static generateRandomDeviation(solution: number): number {
    let deviation: number;
    if (solution < 10 || solution % 2 != 0) {
      deviation = 1;
    } else {
      deviation = 2;
    };
    if (Math.random() < 0.5) {
      deviation = -deviation;
    }
    return deviation;
  }
}
