module.exports = function(items) {
    const groups = {};
    items.forEach(item => {
        const year = item.date.getFullYear();
        if (!(year in groups)) {
            groups[year] = [];
        }
        if (!("date" in item.data)) {
            console.warn("Using implied date for item: " + item.inputPath);
        }
        if (!("title" in item.data)) {
            console.log("No title in item: " + item.inputPath);
        }
        groups[year].push(item);
    });
    // Convert this into a list, of objects: {year: 2020, items: [...]}
    const groupList = [];
    for (const year in groups) {
        groupList.push({year: year, items: groups[year]});
    }

    return groupList.sort((a, b) => b.year - a.year);
};
