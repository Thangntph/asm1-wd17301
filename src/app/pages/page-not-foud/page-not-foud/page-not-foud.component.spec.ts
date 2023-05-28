import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoudComponent } from './page-not-foud.component';

describe('PageNotFoudComponent', () => {
  let component: PageNotFoudComponent;
  let fixture: ComponentFixture<PageNotFoudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageNotFoudComponent]
    });
    fixture = TestBed.createComponent(PageNotFoudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
