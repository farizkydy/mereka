import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailVoteComponent } from './detail-vote.component';

describe('DetailVoteComponent', () => {
  let component: DetailVoteComponent;
  let fixture: ComponentFixture<DetailVoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailVoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
