var splitParents = [];
var splitChildren = [];
var formattedFamilies = [];



function createMenuData(data) {
}


function splitFamily(array){
  for (let i = 0; i < array.length; i++) {
    var splitted = array[0].split("/");
    if (splitted[1]) {
      splitParents.push(splitted[0]);
      splitChildren.push(splitted[1]);
    } else {
      return Error('Parent has no child.');
    }
  }
}

function formatFamily() {
  for(let i = 0; i < splitParents.length; i++) {
    // Add new parent entries
    var newFamily = {title: splitParents[i], data: []};
    // For each parent entry, check through the children and see if there is a match
    for(let i = 0; i < splitChildren.length; i++) {
      if(splitChildren[i].includes(newFamily.title)){
        newFamily.data.push(splitChildren[i]);
      }
    }
    formattedFamilies.push(newFamily);
  }
  return formattedFamilies;
}

// describe("splitFamily", () => {
//
//   it("splits family if it has a child ", () => {
//     const data = ["parent1/parent1child"];
//     const expectedResult = ["parent1"]
//     splitFamily(data)
//     expect(splitParents).toMatchObject(expectedResult);
//     expect(splitChildren).toMatchObject(["parent1child"]);
//   });
//
//   it("Rejects parent if it has no child", () => {
//     const data = ["parent3"];
//     expect(splitFamily(data)).toMatchObject(Error("Parent has no child."));
//   });
//
// });

describe("formatFamily", () => {

  it("Formats a single family", () => {
    const data = ["parent1/parent1child"];
    splitFamily(data);
    expectedResult = [{title: "parent1", data:["parent1child"]}];
    expect(formatFamily()).toMatchObject(expectedResult);
  });

});


describe("menu Data Generator", () => {


    // it("creates correct data structure ", () => {
    //   const data = [
    //     "parent1/parent1child",
    //     "parent1/parent1child2",
    //     "parent2/parent2child",
    //     "parent2/parent2child2",
    //     "parent1/parent1child3",
    //     "parent3",
    //     "parent3/parent3child1",
    //     "parent4"
    //   ];
    //
    //   const expectedResult = [
    //     {
    //       title: "parent1",
    //       data: ["parent1child", "parent1child2", "parent1child3"]
    //     },
    //     { title: "parent2", data: ["parent2child", "parent2child2"] },
    //     { title: "parent3", data: ["parent3child1"] }
    //   ];
    //
    //   const actualResult = createMenuData(data);
    //   expect(actualResult).toMatchObject(expectedResult);
    // });
  });
