const average = (graph) => {
    const treePassage = (graph) => {
        return (graph.children ? graph.children.map(cur => treePassage(cur))
            .reduce((sum, cur) => ({total: sum.total + cur.total, count: sum.count + cur.count}),
                {total: graph.value, count: 1}) : {total: graph.value, count: 1});
    };
    const tree = treePassage(graph);
    return tree.total / tree.count;
};

const min = (graph) => {
    const minValue = graph => graph.children ?
        graph.children.map(minValue).reduce((prev, cur) => prev.value < cur.value ? prev : cur, graph)
        : graph;
    return minValue(graph);
};

const max = (graph) => {
    const maxValue = graph => graph.children ?
        graph.children.map(maxValue).reduce((prev, cur) => prev.value > cur.value ? prev : cur, graph)
        : graph;
    return maxValue(graph);
};
console.log(average(graph));
console.log(min(graph));
console.log(max(graph));