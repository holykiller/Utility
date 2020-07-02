import { NgModule } from '@angular/core';

import {
  DownloadToolService,
  ArraysToolService,
  HtmlTextToolService,
  RemoveReplaceOptionService,
  TextToolService,
} from '../public-api';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [
    ArraysToolService,
    DownloadToolService,
    HtmlTextToolService,
    RemoveReplaceOptionService,
    TextToolService,
  ],
})
export class ToolsModule {}
