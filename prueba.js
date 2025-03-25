const categories = [
  {
    name: "category1",
    subcategories: [
      {
        name: "category2",
        subcategories: [],
      },
      {
        name: "category3",
        subcategories: [
          {
            name: "category4",
            subcategories: [],
          },
        ],
      },
    ],
  },
  {
    name: "category5",
    subcategories: [],
  },
];

const findCategoryPathArray = (categories, categoryName) => {
  const search = (currentCategories, target, currentPath = []) => {
    for (const category of currentCategories) {
      const newPath = [...currentPath, category.name];

      if (category.name === target) {
        return newPath;
      }

      if (category.subcategories && category.subcategories.length > 0) {
        const result = search(category.subcategories, target, newPath);
        if (result) {
          return result;
        }
      }
    }
    return null;
  };

  return search(categories, categoryName);
};

const formatPathToString = (pathArray) => {
  return pathArray ? "/" + pathArray.join("/") : null;
};

const getCategoryPath = (categories, categoryName) => {
  const path = findCategoryPathArray(categories, categoryName);
  return formatPathToString(path);
};

// OUTPUT SAMPLES
console.log(getCategoryPath(categories, "category4"));
console.log(getCategoryPath(categories, "category2"));
console.log(getCategoryPath(categories, "category5"));
