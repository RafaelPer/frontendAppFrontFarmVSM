import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchClienteContentComponent } from './search-cliente-content.component';

describe('SearchClienteContentComponent', () => {
  let component: SearchClienteContentComponent;
  let fixture: ComponentFixture<SearchClienteContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchClienteContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchClienteContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
