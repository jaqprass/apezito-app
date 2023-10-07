import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WalkingroutePage } from './walkingroute.page';

describe('WalkingroutePage', () => {
  let component: WalkingroutePage;
  let fixture: ComponentFixture<WalkingroutePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WalkingroutePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
