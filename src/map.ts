declare global {
  interface NodeListOf<TNode extends Node> extends NodeList {
    map<T>(
      callbackfn: (value: TNode, key: number, parent: NodeListOf<TNode>) => T,
      thisArg?: any
    ): T[];
  }
}

Object.defineProperty(NodeList.prototype, "map", {
  value: function <T extends (...args: any) => any>(callback: T, thisArg: any) {
    const result: ReturnType<typeof callback>[] = [];
    const length: number = this.length;

    for (let i = 0; i < length; i++) {
      if (i in this) result.push(callback.call(thisArg, this[i], i, this));
      else result.length++;
    }

    return result;
  },
  enumerable: false,
  configurable: false,
  writable: false,
});
