# Andrea Arredondo's Website 
![openGraph Image](https://github.com/David-Lazaro-Fernandez/Andrea-Arredondo/assets/57787993/a46a2f35-b108-4df6-a91d-1c43b2473d4b)

# Hi Andy 🫰
This is a quick guide to the project :octocat:🖤

# Stack 

<table>
  <tr>
    <td align="center">Typescript</td>
    <td align="center">Next</td>
    <td align="center">Contentlayer</td>
    <td align="center">MDX</td>
  </tr>
  <tr>
    <td align="center"><img src="https://github.com/David-Lazaro-Fernandez/Andrea-Arredondo/assets/57787993/5cf1b14f-f5fe-49d2-b1c1-18f5bb11f92d" alt="Typescript" height="50"></td>
    <td align="center"><img src="https://github.com/David-Lazaro-Fernandez/Andrea-Arredondo/assets/57787993/e668d4d7-359d-4567-9f3c-eedd46d65085" alt="Next"  height="50"></td>
    <td align="center"><img src="https://github.com/David-Lazaro-Fernandez/Andrea-Arredondo/assets/57787993/24b3a747-2acb-46b4-885f-69886be12c89" alt="Contentlayer"  height="50"></td>
    <td align="center"><img src="https://github.com/David-Lazaro-Fernandez/Andrea-Arredondo/assets/57787993/572477c1-fdf6-4943-948d-4357d18b8f2e" alt="MDX"  height="50"></td>
  </tr>
  
</table>

# Installation 
To install all the dependencies of the project just run: 
```bash
npm install
```

To run the page in a development environment run:
```bash
npm run dev
``` 
This will trigger 2 scripts 
1. `createNewResizedImages.js` This script traverses the `/posts` and `/extracurricularposts` folders and extracts all the photos that are in the `.mdx` files; if it detects a new photo that doesn't have a blurred image it generates it, with the intention of having a placeholder image for each image that exists in the `Highlight` or `Extracurricular` sections while the images are loading. 
2. The `next/dev` script which enables a development environment of NextJS.

# MDX Format 
MDX is a markup format that combines Markdown and JSX (JavaScript XML). It allows you to write JSX directly within your Markdown documents, which means you can import and use React components within your Markdown files.

The content inside the folders `/Extracurricular_posts` & `/Posts` must be only `.mdx` files.
The files are configured for the **following format**: 
```mdx
---
title: string (required)
postType: string (required)
subtitle: string (required)
date: string (optional)
org: string (optional)
category: string (optional)
title_image: image inside /public folder (required) [Supported formats: .webp, .jpeg, .jpg, .png]
images: array of images inside /public folder (required) [Supported formats: .webp, .jpeg, .jpg, .png]
---
Content in MDX
```

**Example**:
```mdx
---
title: 'Online Education In Times Of Covid' 
postType: 'Extracurricular'
subtitle: 'AMITI'
date: '2022'
org: 'AMITI'
category: 'Other' 
title_image: amiti1.jpeg
images: 
    - amiti1.jpeg
    - amiti2.jpeg
    - amiti3.jpeg
    - amiti4.jpeg
---

Muy contenta por haber sido parte del #DíaAMITI compartiendo desde IBM el taller: Ciencia de datos para la toma de decisiones.

Gracias a AMITI A.C. y Joel González Saldivar por la invitación.
#MotordeInnovación
```

# Adding new posts 🗒️
## Highlights
To add a New Highlight Post:
1. Create a new `.mdx` in the `/Posts` following the MDX Format.

![image](https://github.com/David-Lazaro-Fernandez/Andrea-Arredondo/assets/57787993/f6d05b8d-25da-4226-84c1-41a8a2bc7b9c)

2. Make sure to add all the images you're gonna use in the `/public` folder then you can reference them with their name in the file. 

![image](https://github.com/David-Lazaro-Fernandez/Andrea-Arredondo/assets/57787993/f7eab7a5-8bc2-43a3-983d-c9680b0e55b1)

3.- This will automatically create a new Highlight Card in the Highlight Section

## Extracurricular
To add a New Extracurricular Post:
1. Create a new `.mdx` in the `/Extracurricular_posts` following the MDX Format.

![image](https://github.com/David-Lazaro-Fernandez/Andrea-Arredondo/assets/57787993/84d569a8-ad72-4441-995c-20962b584590)

2. Make sure to add all the images you're gonna use in the `/public` folder then you can reference them with their name in the file.

![image](https://github.com/David-Lazaro-Fernandez/Andrea-Arredondo/assets/57787993/f7eab7a5-8bc2-43a3-983d-c9680b0e55b1)
 
3.- This will automatically create a new Extracurricular Card in the Extracurricular Section

# Adding Code To Your Posts 💻
The `.mdx` supports the code addition like you were creating a technical content post thanks to [Rehype Pretty Code](https://rehype-pretty-code.netlify.app/). 
You can add the same code as the one you read on GitHub like the ones below:

![image](https://github.com/David-Lazaro-Fernandez/Andrea-Arredondo/assets/57787993/c5a5b07b-cc53-4d37-891b-2c2cb09546a7)

![image](https://github.com/David-Lazaro-Fernandez/Andrea-Arredondo/assets/57787993/25980305-f0b4-4e0a-a08e-110278c4af93)

![image](https://github.com/David-Lazaro-Fernandez/Andrea-Arredondo/assets/57787993/e74c691f-5a0c-4eae-bc11-c579b09c92d6)

![image](https://github.com/David-Lazaro-Fernandez/Andrea-Arredondo/assets/57787993/1f2a7ea3-e46d-4350-b9c7-cc30473d3e3e)

# MIT License

Copyright (c) [2023] [David Lazaro Fernandez]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.




