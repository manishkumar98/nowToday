export default function Tree() {
  let tree = {
    0: {
      counter: 0,
      nodeId: 0,
      childIds: []
    }
  };
  let parentId = Math.floor(Math.pow(Math.random(), 2));
  tree[1] = {
    id: 1,
    counter: 0,
    childIds: []
  };
  tree[parentId].childIds.push(1);

  return tree;
}

/* 1: {
      counter: 0,
      nodeId: 0,
      childIds: [],
      parentId: Math.floor(Math.random() * 10000)
    },
    2: {
      counter: 0,
      nodeId: 0,
      childIds: [],
      parentId: Math.floor(Math.random() * 10000)
    }*/
