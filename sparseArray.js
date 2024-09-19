function matchingStrings(stringList, queries) {
    let stringMap={};
    for(let i=0;i<stringList.length;i++)
        stringMap[stringList[i]]=stringMap[stringList[i]]+1 || 1;
    for(let j=0;j<queries.length;j++)
        queries[j]=stringMap[queries[j]]|| 0;
    return queries;

}