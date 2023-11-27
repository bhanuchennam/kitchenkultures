// edit-item.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent {
  @Input() item: any;
  @Output() updateItem = new EventEmitter<any>();
  editForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.editForm = this.fb.group({
      id: [''],
      dishName: ['', Validators.required],
      unitPrice: ['', Validators.required],
      foodType: ['', Validators.required],
      Active: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnChanges(): void {
    if (this.item) {
      this.editForm.setValue({
        id: this.item.id,
        dishName: this.item.dishName,
        unitPrice: this.item.unitPrice,
        foodType: this.item.foodType,
        Active: this.item.Active,
        description: this.item.description
      });
    }
  }

  onUpdateItem(): void {
    const updatedItem = this.editForm.value;
    this.updateItem.emit(updatedItem);
  }
}
