import { view } from './storybook.requires';

const StorybookUIRoot = view.getStorybookUI({
  onDeviceUI: true,
  shouldPersistSelection: true,
});

export default StorybookUIRoot;
