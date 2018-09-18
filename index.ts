export class GLColor {

  /**
   * Parse a hex string to a 32bit long
   * supports. Using the # is optional.
   *
   * [#]RGB
   * [#]RGBA
   * [#]RRGGBB
   * [#]RRGGBBAA
   */
  static parseColor(color: string): number{
    if(color.charAt(0) === '#') {
      color = color.substr(1);
    }
    if(color.length === 3){
      color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2] + 'FF';
    } else if(color.length === 4){
      color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2] + color[3] + color[3];
    } else if(color.length === 6){
      color = color[0] + color[1] + color[2] + color[3] + color[4] + color[5] + 'FF';
    }
    return parseInt(color, 16);
  }

  /**
   * Generate a random color by integer
   */
  static randColor(): number {

    // Random hex char
    // '0123456789ABCDEF'[Math.floor(Math.random() * (15 + 1))];

    // Iterate 6 times
    // 'XXXXXX'.split('');

    // Generate an array of 6 random hex digits
    // 'XXXXXX'.split('').map( c => '0123456789ABCDEF'[Math.floor(Math.random() * (15 + 1))]);

    // Generate a random hex string
    // 'XXXXXX'.split('').map( c => '0123456789ABCDEF'[Math.floor(Math.random() * (15 + 1))]).join('');

    return parseInt('XXXXXX'.split('').map( c => '0123456789ABCDEF'[Math.floor(Math.random() * (15 + 1))]).join('') + 'FF', 16);
  }

}