import { NgModule } from '@angular/core';

import {
  DownloadTool,
  ArraysTool,
  HtmlTextTool,
  RemoveReplaceOption,
  TextTool,
} from '../public-api';

@NgModule({
  declarations: [],
  imports: [
    ArraysTool,
    DownloadTool,
    HtmlTextTool,
    RemoveReplaceOption,
    TextTool,
  ],
  exports: [],
  providers: [],
})
export class ToolsModule {}
