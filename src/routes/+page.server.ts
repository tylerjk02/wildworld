export const load = () => {
  const pushOnCondition = (list: any, index: number, a: any, b: number, c: number) => {
    if (index >= b && index < c) {
      list.push(a);
    }
  }
  
  const fetchListPage = async () => {
    const res = await fetch(`https://en.wikipedia.org/w/api.php?action=parse&page=Wikipedia:Unusual_articles&format=json`);
    const returnObj = await res.json();
    const parse = returnObj.parse;
    let linkList: any[] = [];
    let linkIndex = 0;
    parse.links.forEach((e: object) => {
      linkIndex += 1;
      pushOnCondition(linkList, linkIndex, e, 309, 4750);
    })
    const data = linkList;
    return data;
  }
    
  return {
    streamed: {
      listPage: fetchListPage(),
    }
  }
}