# Image Uploads

ViewMe supports uploading profile pictures for resumes. This process is securely handled using a combination of `multer` and `ImageKit`.

## Data Flow

1. **Frontend**: The user selects an image file via a file input in the React application.
2. **Form Data**: The frontend appends the file to a `FormData` object and sends it via `PUT /api/resumes/update`.
3. **Backend Middleware (`multer`)**: The Express route uses the `upload.single('image')` middleware. This temporarily saves the incoming file to the server's disk (or memory buffer).
4. **ImageKit Upload**: The `resumeController` reads the file buffer and uploads it to ImageKit using the `imageKit.files.upload` method.
5. **Transformations**: During upload, we instruct ImageKit to automatically crop the image to a square (focusing on the face). If the user requested background removal (`removeBackground: true`), an additional `e-bgremove` transformation is applied.
6. **Database Update**: ImageKit returns a secure, optimized public URL. This URL is saved to the `personal_info.image` field of the Resume document in MongoDB.

## Configuration Requirements

To make image uploads work locally, you must provide valid ImageKit credentials in your `server/.env` file:

```env
IMAGEKIT_PUBLIC_KEY=...
IMAGEKIT_PRIVATE_KEY=...
```

**Security Warning**: Never expose your `IMAGEKIT_PRIVATE_KEY` to the frontend client.

## Limitations
Currently, uploads are processed synchronously. Very large image files may cause request timeouts. It is recommended to implement client-side image compression before sending the payload in the future.
