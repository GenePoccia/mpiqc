import {defineField, defineType} from 'sanity'

export const navigation = defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'navigationCategories',
      title: 'Navigation Categories',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'category',
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
            defineField({
              name: 'isDropdown',
              title: 'Is Dropdown?',
              type: 'boolean',
              initialValue: false,
            }),
            defineField({
              name: 'dropdownItems',
              title: 'Dropdown Items',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'dropdownItem',
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
                },
              ],
              hidden: ({parent}) => !parent?.isDropdown, // Hide unless isDropdown is true
            }),
          ],
        },
      ],
    }),
  ],
})
