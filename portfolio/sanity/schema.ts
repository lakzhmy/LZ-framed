import { type SchemaTypeDefinition } from 'sanity'

const project: SchemaTypeDefinition = {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    },
    {
      name: 'images',
      title: 'Project Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'UX/UI Design', value: 'ux-ui' },
          { title: 'Product Design', value: 'product' },
          { title: 'Mobile App', value: 'mobile' },
          { title: 'Web Design', value: 'web' },
          { title: 'Other', value: 'other' },
        ],
      },
    },
    {
      name: 'year',
      title: 'Year',
      type: 'number',
    },
    {
      name: 'client',
      title: 'Client',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show this project on the homepage',
      initialValue: false,
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Order in which projects appear',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
      subtitle: 'category',
    },
  },
}

const siteSettings: SchemaTypeDefinition = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'text',
    },
    {
      name: 'authorName',
      title: 'Author Name',
      type: 'string',
    },
    {
      name: 'authorBio',
      title: 'Author Bio',
      type: 'text',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        {
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url',
        },
        {
          name: 'behance',
          title: 'Behance',
          type: 'url',
        },
        {
          name: 'dribbble',
          title: 'Dribbble',
          type: 'url',
        },
        {
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
        },
      ],
    },
  ],
}

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, siteSettings],
}
