const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Get the folder path from command-line arguments
const folderPath = process.argv[2];

// Check if the folder path is provided
if (!folderPath) {
  console.error('Please provide the folder path as the first argument.');
  return;
}

// Read the files in the folder
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  // Iterate through each file
  files.forEach((file) => {
    // Read the file contents
    const filePath = path.join(folderPath, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');

    // Extract the front matter data
    const { data } = matter(fileContent);

    // Check if the tags element is missing
    if (!data.tags) {
      console.log(`Missing tags in file: ${filePath}`);
    }
  });
});
