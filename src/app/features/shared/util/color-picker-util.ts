export class ColorPicker {
  static colors: string[] = [
    'bg-yellow-400',
    'bg-red-400',
    'bg-blue-400',
    'bg-green-400',
    'bg-purple-400',
    'bg-pink-400',
    'bg-indigo-400',
    'bg-teal-400',
    'bg-orange-400',
    'bg-gray-400',
    'bg-lime-400',
    'bg-amber-400',
    'bg-emerald-400',
    'bg-cyan-400',
    'bg-fuchsia-400',
    'bg-rose-400',
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
