import {
  PIECE_RS, XS,
  boardTopology, boardWithLinesSquashed, boardWithPiece, headspace,
  isValid, lineClears, maxValidY, scoreForLines, topoDelta, voids,
} from './util';

export class DecisionTree {
  static branchCount = 0;

  private _ox!: number;
  get x(): number { return this._ox; }

  private _or!: number;
  get r(): number { return this._or; }

  private _result!: number[][];
  private _valid!: boolean;
  get valid(): boolean { return this._valid; }

  private _branches: DecisionTree[] = [];
  private get _branchesScore(): number {
    return this._branches.reduce((sum, b) => sum + b.score, 0);
  }

  private _score!: number;
  get score(): number {
    return this._valid ? this._score + this._branchesScore + this._headspace - this._voids : 0;
  }

  private _headspace!: number;
  private _voids!: number;

  private constructor() {}

  static head(b: number[][], q: number[], maxDepth: number): DecisionTree {
    const tree = new DecisionTree();
    DecisionTree.branchCount = 0;
    tree._result = b;
    tree._score = 0;
    tree._headspace = headspace(tree._result);
    tree._voids = voids(tree._result);

    if (q.length > 0) {
      const depth = 0;
      const i = q[depth];
      for (let br = 0; br < PIECE_RS[i]; br++) {
        for (const bx of XS) {
          if (tree._branches.length < 10 || topoDelta(bx, br, i, boardTopology(b)) === 0) {
            const branch = DecisionTree.branch(bx, br, q, depth, maxDepth, tree._result);
            if (branch.valid) {
              tree._branches.push(branch);
            }
          }
        }
      }
    }

    tree._valid = tree._branches.length > 0;
    if (tree._valid) {
      let bestIndex = 0;
      let bestScore = tree._branches[0].score;
      for (let i = 1; i < tree._branches.length; i++) {
        const branchScore = tree._branches[i].score;
        if (branchScore > bestScore) {
          bestIndex = i;
          bestScore = branchScore;
        }
      }
      tree._or = tree._branches[bestIndex].r;
      tree._ox = tree._branches[bestIndex].x;
    }
    return tree;
  }

  static branch(ox: number, or: number, q: number[], depth: number, maxDepth: number, b: number[][]): DecisionTree {
    const tree = new DecisionTree();
    DecisionTree.branchCount++;
    tree._ox = ox;
    tree._or = or;

    if (q.length > 0 && depth < q.length && isValid(ox, 0, or, q[depth], b)) {
      const i = q[depth];
      tree._valid = true;
      const y = maxValidY(ox, 0, or, i, b);
      tree._result = boardWithPiece(ox, y, or, i, b);
      const l = lineClears(tree._result);
      tree._score = scoreForLines(l.length);
      tree._result = boardWithLinesSquashed(tree._result, l);
      tree._headspace = headspace(tree._result);
      tree._voids = voids(tree._result);

      if (q.length > depth + 1 && depth + 1 < maxDepth) {
        for (let br = 0; br < PIECE_RS[i]; br++) {
          for (const bx of XS) {
            const child = DecisionTree.branch(bx, br, q, depth + 1, maxDepth, tree._result);
            if (child.valid) {
              tree._branches.push(child);
            }
          }
        }
      }
    } else {
      tree._valid = false;
    }
    return tree;
  }
}

export class TopoTree {
  static branchCount = 0;

  private _ox!: number;
  get x(): number { return this._ox; }

  private _or!: number;
  get r(): number { return this._or; }

  private _result!: number[][];
  private _valid!: boolean;
  get valid(): boolean { return this._valid; }

  private _branches: TopoTree[] = [];
  private get _branchesScore(): number {
    return this._branches.reduce((sum, b) => sum + b.score, 0);
  }

  private _score!: number;
  get score(): number {
    return this._valid ? this._score + this._branchesScore + this._headspace - this._voids : 0;
  }

  private _headspace!: number;
  private _voids!: number;

  private constructor() {}

  static head(b: number[][], q: number[], maxDepth: number): TopoTree {
    const tree = new TopoTree();
    TopoTree.branchCount = 0;
    tree._result = b;
    tree._score = 0;
    tree._headspace = headspace(tree._result);
    tree._voids = voids(tree._result);

    const scores = new Map<number, number[]>();
    const i = q[0];
    const t = boardTopology(b);
    for (let r = 0; r < PIECE_RS[i]; r++) {
      for (let xi = 0; xi < XS.length; xi++) {
        const x = XS[xi];
        scores.set(topoDelta(x, r, i, t), [r, x]);
      }
    }

    const rankedKeys = [...scores.keys()].sort((a, b) => a - b);
    const topKeys = rankedKeys.slice(0, Math.min(6, rankedKeys.length));
    for (const key of topKeys) {
      const rs = scores.get(key)!;
      const branch = TopoTree.branch(rs[1], rs[0], q, 0, maxDepth, b);
      if (branch.valid) {
        tree._branches.push(branch);
      }
    }

    tree._valid = tree._branches.length > 0;
    if (tree._valid) {
      let bestIndex = 0;
      let bestScore = tree._branches[0].score;
      for (let i = 1; i < tree._branches.length; i++) {
        const branchScore = tree._branches[i].score;
        if (branchScore > bestScore) {
          bestIndex = i;
          bestScore = branchScore;
        }
      }
      tree._or = tree._branches[bestIndex].r;
      tree._ox = tree._branches[bestIndex].x;
    }
    return tree;
  }

  static branch(ox: number, or: number, q: number[], depth: number, maxDepth: number, b: number[][]): TopoTree {
    const tree = new TopoTree();
    TopoTree.branchCount++;
    tree._ox = ox;
    tree._or = or;

    if (q.length > 0 && depth < q.length && isValid(ox, 0, or, q[depth], b)) {
      const i = q[depth];
      tree._valid = true;
      const y = maxValidY(ox, 0, or, i, b);
      tree._result = boardWithPiece(ox, y, or, i, b);
      const l = lineClears(tree._result);
      tree._score = scoreForLines(l.length);
      tree._result = boardWithLinesSquashed(tree._result, l);
      tree._headspace = headspace(tree._result);
      tree._voids = voids(tree._result);

      if (q.length > depth + 1 && depth + 1 < maxDepth) {
        const scores = new Map<number, number[]>();
        const ni = q[depth + 1];
        const t = boardTopology(tree._result);
        for (let r = 0; r < PIECE_RS[ni]; r++) {
          for (let xi = 0; xi < XS.length; xi++) {
            const x = XS[xi];
            scores.set(topoDelta(x, r, ni, t), [r, x]);
          }
        }

        const rankedKeys = [...scores.keys()].sort((a, b) => a - b);
        const topKeys = rankedKeys.slice(0, Math.min(6, rankedKeys.length));
        for (const key of topKeys) {
          const rs = scores.get(key)!;
          const child = TopoTree.branch(rs[1], rs[0], q, depth + 1, maxDepth, tree._result);
          if (child.valid) {
            tree._branches.push(child);
          }
        }
      }
    } else {
      tree._valid = false;
    }
    return tree;
  }
}
