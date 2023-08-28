import Header from '../components/Header';
import { Component } from '../core/component';
import { navigate } from '../core/router';
import { uploadData, uploadImage } from '../store/memberStore';
import { v4 as uuidv4 } from 'uuid';
import { existFile, validateEmail } from '../utils/validate';

export default class Write extends Component {
  render() {
    this.componentRoot.innerHTML = `
    <section class="write-title">
    직원을 등록해주세요
    </section>
    <form class="write-container" id='form'>
    <input class="write-name" placeholder="이름을 입력해주세요" name="name" required/>
    <input class="write-email" placeholder="이메일을 입력해주세요" name="email" required/>
    <div class="image-container">
    <input class="write-image" value='' placeholder="이미지를 첨부해주세요 ( 권장 사이즈 400*480 )" disabled>
    <label for="file" class="file-label">파일 선택</label> 
    <input type="file" name="file" id="file" accept=".jpg, .png" class="file-input">
    </div>
    <button class="add-member" type="submit">등록</button>
    </form>
        `;
    this.componentRoot.prepend(new Header().componentRoot);

    const getImageUrl = async (fileData) => {
      return await uploadImage(fileData, uuidv4());
    };

    const handleSubmit = async (event) => {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);

      if (!existFile(formData.get('file'), true)) return;
      if (!validateEmail(formData.get('email'))) return;

      const photoUrl = await getImageUrl(formData.get('file'));

      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        photoUrl: photoUrl,
      };

      uploadData(data);

      navigate();
    };

    const imageFile = this.componentRoot.querySelector('.file-input');
    const writeImage = this.componentRoot.querySelector('.write-image');

    imageFile.addEventListener('change', () => {
      writeImage.value = imageFile.value;
    });
    const form = this.componentRoot.querySelector('.write-container');
    form.addEventListener('submit', handleSubmit);
  }
}