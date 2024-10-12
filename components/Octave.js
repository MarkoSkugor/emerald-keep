class Octave {
    constructor(a) {
      this.b      = a *  Math.pow(2, 2/12);
      this.aSharp = a *  Math.pow(2, 1/12);
      this.a = a;
      this.gSharp = a *  Math.pow(2, -1/12);
      this.g      = a *  Math.pow(2, -2/12);
      this.fSharp = a *  Math.pow(2, -3/12);
      this.f      = a *  Math.pow(2, -4/12);
      this.e      = a *  Math.pow(2, -5/12);
      this.dSharp = a *  Math.pow(2, -6/12);
      this.d      = a *  Math.pow(2, -7/12);
      this.cSharp = a *  Math.pow(2, -8/12);
      this.c      = a *  Math.pow(2, -9/12);
    }
}

export { Octave };
