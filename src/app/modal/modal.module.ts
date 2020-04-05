import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ModalRoutingModule } from "./modal-routing.module";
import { ModalHomeComponent } from "./modal-home/modal-home.component";
import { ModalComponent } from "./modal/modal.component";
import { SharedModule } from "../shared/shared.module";
import { AccordionComponent } from './accordion/accordion.component';

@NgModule({
  declarations: [ModalHomeComponent, ModalComponent, AccordionComponent],
  imports: [CommonModule, ModalRoutingModule, SharedModule],
})
export class ModalModule {}
