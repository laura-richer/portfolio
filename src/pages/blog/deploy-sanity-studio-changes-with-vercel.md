---
id: 4
layout: ../../layouts/BlogPageLayout.astro
title: 'Automatically deploy Sanity Studio changes with Vercel'
slug: 'deploy-sanity-studio-changes-with-vercel'
thumbnail: '/images/blog/sanity-vercel-autodeploy-thumbnail.png'
image: '/images/blog/sanity-vercel-autodeploy.png'
description: 'How to create a webhook to automatically trigger Sanity Studio content updates, using Vercel for hosting (If you dont want to use SSR)'
published: '10th Jun 2024'
---

Sanity Studio, if your not using SSR, requires a manual deployment to trigger any content changes to show on the frontend of your site. I'm going to run through the simple steps of creating a webhook to automatically deploy on any update to Sanity Studio content. Im using Vercel hosting for this example but I imagine it will be a similar process for other cloud hosting platforms.
<br/><br/>

### Vercel Configuration
* Inside your chosen project in Vercel, navigate to `Settings > Git > Deploy Hooks`
* Under the `Create hook` heading, fill in a name, I called mine `Sanity Studio content update`.
* Fill in the branch you want the webhook to trigger.
* Click `Create hook`
* Copy the url thats generated.
<br/><br/>

### Sanity Configuration
- Inside your Sanity project navigate to `API > Webhooks`
- Under the `GROQ-powered webhooks` heading, click `Create Webhook`
- Fill in a name
- Paste the URL copied from Vercel into the URL field
- Select `Create, Update and Delete` to trigger the webhook on to ensure that all of your content changes trigger a deployment
- Save the webhook
<br/><br/>

To test, update some content in Sanity Studio & check Vercel to see the deployment triggered. Finally, check the frontend to see if the content has updated once the deployment has finished.
