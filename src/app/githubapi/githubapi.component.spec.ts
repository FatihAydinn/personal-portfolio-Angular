import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubapiComponent } from './githubapi.component';

describe('GithubapiComponent', () => {
  let component: GithubapiComponent;
  let fixture: ComponentFixture<GithubapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GithubapiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
