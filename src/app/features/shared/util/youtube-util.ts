export class YoutubeUtil {
  private constructor() {}


  static getId(url:string):string{
    const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/;

    const match = url.match(regex);

    return match ? match[1] : (() => { throw new Error("no es link valido"); })(); // Re
  }
}
