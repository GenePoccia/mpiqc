import {defineField, defineType} from 'sanity'

export const locations = defineType({
  name: 'locations',
  title: 'Locations',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'backgroundImage',
      type: 'image',
      title: 'Background Image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      type: 'object',
      name: 'header',
      title: 'Header',
      fields: [
        defineField({
          name: 'en',
          title: 'English',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'fr',
          title: 'French',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      type: 'object',
      name: 'subHeader',
      title: 'Sub Header',
      fields: [
        defineField({
          name: 'en',
          title: 'English',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'fr',
          title: 'French',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      type: 'object',
      name: 'description',
      title: 'Description',
      fields: [
        defineField({
          name: 'en',
          title: 'English',
          type: 'text',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'fr',
          title: 'French',
          type: 'text',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'globalLocations',
      title: 'Global Locations',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          name: 'location',
          title: 'Location',
          fields: [
            defineField({
              name: 'locationImage',
              title: 'Location Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              fields: [
                defineField({
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string',
                }),
              ],
            }),
            defineField({
              type: 'object',
              name: 'city',
              title: 'City and Country',
              fields: [
                defineField({
                  name: 'en',
                  title: 'English',
                  type: 'string',
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: 'fr',
                  title: 'French',
                  type: 'string',
                  validation: (rule) => rule.required(),
                }),
              ],
            }),
            defineField({
              type: 'object',
              name: 'address',
              title: 'Address',
              fields: [
                defineField({
                  name: 'en',
                  title: 'English',
                  type: 'text',
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: 'fr',
                  title: 'French',
                  type: 'text',
                  validation: (rule) => rule.required(),
                }),
              ],
            }),
            defineField({
              name: 'phoneNumbers',
              title: 'Phone Numbers',
              type: 'array',
              of: [
                defineField({
                  type: 'string',
                  name: 'phoneNumber',
                }),
              ],
            }),
            defineField({
              name: 'email',
              title: 'Email',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
  ],
})
