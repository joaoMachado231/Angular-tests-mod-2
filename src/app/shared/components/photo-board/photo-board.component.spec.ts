import { SimpleChange, SimpleChanges } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Photo } from 'src/app/shared/components/photo-board/interfaces/photo';
import { PhotoBoardModule } from 'src/app/shared/components/photo-board/photo-board.module';

import { PhotoBoardComponent } from './photo-board.component';

describe(PhotoBoardComponent.name, () => {
  let component: PhotoBoardComponent;
  let fixture: ComponentFixture<PhotoBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoBoardComponent ],
      imports: [ PhotoBoardModule ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoBoardComponent);
    component = fixture.componentInstance;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should display rows and columns when (@Input photos) has value', () => {
    component.photos = buildPhotoList();
    fixture.detectChanges();

    const change: SimpleChanges = {
      photos: new SimpleChange([], component.photos, true)
    };
    component.ngOnChanges(change);

    expect(component.rows.length).withContext('Number of rows').toBe(2);
    expect(component.rows[0].length).withContext('Number of columns form the first row').toBe(4);
    expect(component.rows[1].length).withContext('Number of columns form the second row').toBe(4);
  });
});

function buildPhotoList(): Photo[] {
  const photos: Photo[] = [];

  for(let i = 0; i < 8; i++) {
    photos.push({
      id: i + 1,
      url: '',
      description: '',
    });
  }

  return photos;
}
