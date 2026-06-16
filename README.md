# Problem statement

- Implement all CRUD operations (add, view, edit, delete data).
- Use React Query to manage API calls and caching.
- Ensure the page does not refresh unnecessarily (smooth UI updates using caching/invalidation).
- Handle loading, error, and success states properly.
- Deploy the application on a free hosting platform (Vercel/Netlify)

## here i using react query (tanstack) and react , stylesheep module css, better look framer

1. add , View , delete data complete
2. here i am using tanstack for all query like add , delete , view, which are handling cache . all data are caching by tanstack and if you want Confirming tanstack devtool are here its not visible on production netlify url , its sees on local machine

3. page data are not refresh again and again, when adding data to list
4. server is not deploy because netlify not given any backend deployment ,so download code and run with that command so
   A. step - download project and run this command
   `npm install`
   `npx json-server --watch db.json --port 3001`
   both command

   B. step - go to live url and see data will be update
   Note - i give you screenrecording to you working project

5. responsive ui and validation
6. deploy ui in netlify
7. https://brilliant-druid-284f97.netlify.app/
