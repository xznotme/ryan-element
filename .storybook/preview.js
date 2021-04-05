import '../src/styles/index.scss'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Example',['Introduction','Button', 'AutoComplete', 'Menu', 'Upload']],
    },
  },
}
const styles = {
  textAlign: 'center',
  padding: '20px 40px',
};
const BaceElementProvider=(Story,context)=>{
  return (
    <div style={styles}>
      <Story {...context} />
    </div>
  )
}
export const decorators = [BaceElementProvider];

