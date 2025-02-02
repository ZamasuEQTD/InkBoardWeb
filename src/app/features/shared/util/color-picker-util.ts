export class ColorPicker {
  static colors: string[] = [
    'bg-yellow-200',
    'bg-red-200',
    'bg-blue-200',
    'bg-green-200',
    'bg-purple-200',
    'bg-pink-200',
    'bg-indigo-200',
    'bg-teal-200',
    'bg-orange-200',
    'bg-gray-200',
    'bg-lime-200',
    'bg-amber-200',
    'bg-emerald-200',
    'bg-cyan-200',
    'bg-fuchsia-200',
    'bg-rose-200',
  ];

  private constructor() {}

  static generar(text:string): string {
    return this.generarFromColors(text,this.colors);
  }

  static generarFromColors(text:string, colors : string[]): string {
    if (!text) throw new Error("[text] no puede estar vacía");
    if (!colors.length) throw new Error("[colors] no puede estar vacía");

    let n: number = 0;

    for (let i = 0; i < text.length; i++) {
        n += text.charCodeAt(i);
    }

    const index: number = n % colors.length;

    return colors[index];
  }
}
