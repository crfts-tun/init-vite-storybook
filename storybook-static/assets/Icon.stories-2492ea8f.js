var m=Object.defineProperty;var a=(o,n)=>m(o,"name",{value:n,configurable:!0});import{r as g}from"./index-2f7990c7.js";import{c as v}from"./index-ed86a6de.js";import{j as l}from"./jsx-runtime-b98b00b5.js";import"./es.object.get-own-property-descriptor-d261b708.js";const r=g.forwardRef((o,n)=>{const{className:i,icon:e,size:c="16",color:u="blue",...p}=o,d={12:"w-[12px] h-[12px]",16:"w-[16px] h-[16px]",20:"w-[20px] h-[20px]",24:"w-[24px] h-[24px]",32:"w-[32px] h-[32px]",40:"w-[40px] h-[40px]"};return l("span",{ref:n,className:v("block",{blue:"bg-blue-500",green:"bg-green-500",yellow:"bg-yellow-500",dark:"bg-dark-100",light:"bg-light-100","light-green":"bg-light-green-500","shade-dark":"bg-shade-dark-500","shade-light":"bg-shade-light-500"}[u],d[c],i),style:{WebkitMaskImage:e?`var(--icon-${e})`:"none",maskImage:e?`var(--icon-${e})`:"none"},...p})}),t=r;try{r.displayName="Icon",r.__docgenInfo={description:"",displayName:"Icon",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"enum",value:[{value:'"null-1"'},{value:'"null-2"'},{value:'"arrowhead-top"'},{value:'"arrowhead-left"'},{value:'"arrowhead-right"'},{value:'"arrowhead-bottom"'},{value:'"arrowhead-sm-top"'},{value:'"arrowhead-sm-left"'},{value:'"arrowhead-sm-right"'},{value:'"arrowhead-sm-bottom"'},{value:'"round-arrow-top"'},{value:'"round-arrow-left"'},{value:'"round-arrow-right"'},{value:'"round-arrow-bottom"'},{value:'"round-solid-arrow-top"'},{value:'"round-solid-arrow-left"'},{value:'"round-solid-arrow-right"'},{value:'"round-solid-arrow-bottom"'},{value:'"bar"'},{value:'"bar-1"'},{value:'"bar-2"'},{value:'"double-bar"'},{value:'"bow-tie"'},{value:'"play"'},{value:'"stop"'},{value:'"pause"'},{value:'"first"'},{value:'"last"'},{value:'"globe"'},{value:'"tako"'},{value:'"kebab"'},{value:'"cheese"'},{value:'"veggie"'},{value:'"meatball"'},{value:'"hamburger"'},{value:'"vespa"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"12"'},{value:'"16"'},{value:'"20"'},{value:'"24"'},{value:'"32"'},{value:'"40"'}]}}}}}catch{}const b=["null-1","null-2","arrowhead-top","arrowhead-left","arrowhead-right","arrowhead-bottom","arrowhead-sm-top","arrowhead-sm-left","arrowhead-sm-right","arrowhead-sm-bottom","round-arrow-top","round-arrow-left","round-arrow-right","round-arrow-bottom","round-solid-arrow-top","round-solid-arrow-left","round-solid-arrow-right","round-solid-arrow-bottom","bar","bar-1","bar-2","double-bar","bow-tie","play","stop","pause","first","last","globe","tako","kebab","cheese","veggie","meatball","hamburger","vespa"],h=["blue","green","light-green","yellow","dark","light","shade-dark","shade-light"],w=["12","16","20","24","32","40"],z={parameters:{storySource:{source:`/** style */
/** lib */
/** hooks */
/** component */
import Icon from './index'

/** type */
import type { ComponentStory, ComponentMeta } from '@storybook/react'
import {
  iconList,
  iconSizes,
  iconColors,
} from '../../constance/icons'

export default {
  title: 'Vespa/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>

const SingleIconTemplate: ComponentStory<typeof Icon> = (
  args,
): JSX.Element => <Icon {...args} />

export const SingleIcon = SingleIconTemplate.bind({})

// Primary.args = {...commonArgs, icon: 'null-1' }

SingleIcon.args = {
  icon: 'null-1',
  size: '16',
  color: 'blue',
}

SingleIcon.argTypes = {
  icon: {
    control: { type: 'select' },
    options: iconList,
  },
  color: {
    control: { type: 'select' },
    options: iconColors,
  },
  size: {
    control: { type: 'select' },
    options: iconSizes,
  },
}

// export const HoverIcon = SingleIconTemplate.bind({})
// HoverIcon.args = {
//   icon: 'null-1',
//   size: '24',
//   color: 'blue',
//   className: 'vespa-cursor-pointer hover:vespa-bg-dark-200',
// }

// HoverIcon.argTypes = {
//   color: {
//     control: { type: 'select' },
//     options: iconColors,
//   },
// }
`,locationsMap:{"single-icon":{startLoc:{col:56,line:20},endLoc:{col:36,line:22},startBody:{col:56,line:20},endBody:{col:36,line:22}}}}},title:"Vespa/Icon",component:t},y=a(o=>l(t,{...o}),"SingleIconTemplate"),s=y.bind({});s.args={icon:"null-1",size:"16",color:"blue"};s.argTypes={icon:{control:{type:"select"},options:b},color:{control:{type:"select"},options:h},size:{control:{type:"select"},options:w}};const _=["SingleIcon"];export{s as SingleIcon,_ as __namedExportsOrder,z as default};
//# sourceMappingURL=Icon.stories-2492ea8f.js.map
