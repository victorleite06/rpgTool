import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpgsListComponent } from './rpgs-list.component';

describe('RpgsListComponent', () => {
  let component: RpgsListComponent;
  let fixture: ComponentFixture<RpgsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RpgsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RpgsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
