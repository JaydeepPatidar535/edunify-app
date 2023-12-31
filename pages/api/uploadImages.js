export default async function handler(req, res) {
  const form = new IncomingForm();

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error('Error parsing form:', err);
      return res.status(500).json({ success: false, error: 'Internal Server Error (parsing form)' });
    }

    const oldPath = files.image.path;
    const newFolderPath = path.join(process.cwd(), 'pages', 'schoolImagesFolder');
    const newPath = path.join(newFolderPath, files.image.name);

    if (!fs.existsSync(newFolderPath)) {
      fs.mkdirSync(newFolderPath, { recursive: true });
    }

    fs.rename(oldPath, newPath, (err) => {
      if (err) {
        console.error('Error moving file:', err);
        return res.status(500).json({ success: false, error: 'Internal Server Error (moving file)' });
      }

      const imageUrl = `/schoolImagesFolder/${files.image.name}`;
      return res.status(200).json({ success: true, path: imageUrl });
    });
  });
}
