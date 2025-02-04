export class YoutubeUtil {
  private constructor() {}

  static getId(url: string): string | null {
    const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);

    return match ? match[1] : null;
  }

  static getIdOrThrow(url: string): string {
    return (
      this.getId(url) ||
      (() => {
        throw new Error('No es un enlace de youtube');
      })()
    );
  }

  static esYoutubeEnlace(url: string): boolean {

    let id:string | null= this.getId(url);

    return  id !== null;
  }
}
