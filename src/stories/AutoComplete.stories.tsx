import React from 'react'
import { Story, Meta } from '@storybook/react'
import { AutoComplete, AutoCompleteProps } from '../components/AutoComplete/autoComplete'
import { action } from '@storybook/addon-actions'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
export default {
  title: 'Example/AutoComplete',
  component: AutoComplete,
  decorators: [story => <div style={{ textAlign: 'left',minHeight: '300px' }}>{story()}</div>],
} as Meta;



// const lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins',
// 'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando']
// const lakersWithNumber = [
//   {value: 'bradley', number: 11},
//   {value: 'pope', number: 1},
//   {value: 'caruso', number: 4},
//   {value: 'cook', number: 2},
//   {value: 'cousins', number: 15},
//   {value: 'james', number: 23},
//   {value: 'AD', number: 3},
//   {value: 'green', number: 14},
//   {value: 'howard', number: 39},
//   {value: 'kuzma', number: 0},
// ]
// const handleFetch = (query: string) => {
//   return lakers.filter(name => name.includes(query)).map(name => ({value: name}))
// }
// const handleFetch = (query: string) => {
//   return lakersWithNumber.filter(player => player.value.includes(query))
// }
const handleFetch = (query: string) => {
  return fetch(`https://api.github.com/search/users?q=${query}`)
    .then(res => res.json())
    .then(({ items }) => {
      console.log(items)
      return items.slice(0, 10).map((item: any) => ({ value: item.login, ...item }))
    })
}

// export const Template: Story<AutoCompleteProps> = (args) =>
//   <>
//     <AutoComplete fetchSuggestions={handleFetch} />
//   </>;

const Template: Story<AutoCompleteProps> = (args) =>
<>
  <AutoComplete
    fetchSuggestions={handleFetch}
    onSelect={action('selected')}
  //renderOption={renderOption}
  />
</>;
export const SimpleComplete = Template.bind({});
