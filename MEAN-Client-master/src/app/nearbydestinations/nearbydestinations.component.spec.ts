import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ItemsService} from "../items.service";
import { NearbydestinationsComponent } from './nearbydestinations.component';

describe('NearbydestinationsComponent', () => {
  let component: NearbydestinationsComponent;
  let fixture: ComponentFixture<NearbydestinationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearbydestinationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearbydestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
