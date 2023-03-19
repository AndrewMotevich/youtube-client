import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAddItemComponent } from './search-add-item.component';

describe('SearchAddItemComponent', () => {
  let component: SearchAddItemComponent;
  let fixture: ComponentFixture<SearchAddItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchAddItemComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(SearchAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
