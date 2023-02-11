var p=Object.defineProperty;var o=(e,t)=>p(e,"name",{value:t,configurable:!0});import{r as d}from"./index-2f7990c7.js";import{c as f}from"./index-ed86a6de.js";import{j as a}from"./jsx-runtime-b98b00b5.js";import"./es.object.get-own-property-descriptor-d261b708.js";const n=d.forwardRef((e,t)=>{const{iconPosition:v,children:s,type:l,sizes:u="medium",variants:i,...m}=e,c={"ex-small":"",small:"",medium:"",large:"","ex-large":""};return a("button",{ref:t,type:l,...m,className:f({outline:"",primary:"",secondary:""}[i],c[u]),children:s})}),r=n;try{n.displayName="Button",n.__docgenInfo={description:"",displayName:"Button",props:{iconPosition:{defaultValue:null,description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},sizes:{defaultValue:null,description:"",name:"sizes",required:!0,type:{name:"enum",value:[{value:'"ex-small"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"ex-large"'}]}},variants:{defaultValue:null,description:"",name:"variants",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"outline"'}]}},rounded:{defaultValue:null,description:"",name:"rounded",required:!0,type:{name:"boolean"}}}}}catch{}const q={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './index'

export default {
  title: 'test/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
)

export const Default = Template.bind({})

const commonArgs = {
  children: 'Test Button',
}

Default.args = commonArgs
`,locationsMap:{default:{startLoc:{col:48,line:11},endLoc:{col:1,line:13},startBody:{col:48,line:11},endBody:{col:1,line:13}}}}},title:"test/Button",component:r,argTypes:{}},y=o(e=>a(r,{...e}),"Template"),B=y.bind({}),g={children:"Test Button"};B.args=g;const z=["Default"];export{B as Default,z as __namedExportsOrder,q as default};
//# sourceMappingURL=index.stories-bf9078cf.js.map
