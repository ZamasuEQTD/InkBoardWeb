import { YoutubeUtil } from "../../app/features/shared/util/youtube-util";

describe('YoutubeUtil', () => {
  describe('getId', () => {
    it('should return the video ID for a valid YouTube URL', () => {
      const url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
      const id = YoutubeUtil.getId(url);
      expect(id).toBe('dQw4w9WgXcQ');
    });

    it('should return the video ID for a valid shortened YouTube URL', () => {
      const url = 'https://youtu.be/dQw4w9WgXcQ';
      const id = YoutubeUtil.getId(url);
      expect(id).toBe('dQw4w9WgXcQ');
    });

    it('should return null for an invalid YouTube URL', () => {
      const url = 'https://www.example.com/watch?v=dQw4w9WgXcQ';
      const id = YoutubeUtil.getId(url);
      expect(id).toBeNull();
    });

    it('should return the video ID for a YouTube shorts URL', () => {
      const url = 'https://www.youtube.com/shorts/dQw4w9WgXcQ';
      const id = YoutubeUtil.getId(url);
      expect(id).toBe('dQw4w9WgXcQ');
    });

    it('should return null for a non-YouTube URL', () => {
      const url = 'https://www.example.com';
      const id = YoutubeUtil.getId(url);
      expect(id).toBeNull();
    });
  });
});