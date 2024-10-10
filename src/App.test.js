import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';

let renderResult;

beforeEach(() => {
  renderResult = render(
    <Provider store={store}>
      <App/>
    </Provider>
  )
})

test('renders header', () => {
  const headerElement = screen.getByText(/spaceRAP/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders gallery', () => {
  const galleryElement = screen.getByText(/Loading.../i);
  expect(galleryElement).toBeInTheDocument();
});

test('renders gallery after loading', async () => {
  await waitFor(() => {
    const spaceElements = screen.getAllByText(/Space/i);
    expect(spaceElements.length).toBeGreaterThan(0);
  })
})

test('renders search bar', () => {
  const searchBarElement = screen.getByPlaceholderText(/Search.../i);
  expect(searchBarElement).toBeInTheDocument();
});

test('renders filter buttons', () => {
  const filterA = screen.getByText('a');
  const filterB = screen.getByText('b');
  const filterC = screen.getByText('c');
  const filterD = screen.getByText('d');
  const filterE = screen.getByText('e');
  const filterF = screen.getByText('f');
  const filterClearAll = screen.getByText('Clear All');

  expect(filterA).toBeInTheDocument();
  expect(filterB).toBeInTheDocument();
  expect(filterC).toBeInTheDocument();
  expect(filterD).toBeInTheDocument();
  expect(filterE).toBeInTheDocument();
  expect(filterF).toBeInTheDocument();
  expect(filterClearAll).toBeInTheDocument();
});

test('clicking on an image shows popUp and clicking on the x closes it', async() => {
  const { container } = render(
    <Provider store={store}>
      <App/>
    </Provider>
  )

  await waitFor(() => {
    const multipleSpaceImages = container.querySelectorAll('.image-wrapper');
    expect(multipleSpaceImages.length).toBeGreaterThan(1);
  })

    const multipleSpaceImages = container.querySelectorAll('.image-wrapper');
    const spaceImage = multipleSpaceImages[0];

    expect(spaceImage).toBeInTheDocument();
    fireEvent.click(spaceImage);

    const popUpElement = container.querySelector('.pop-up');
    expect(popUpElement).toBeInTheDocument();

    const closeButton = container.querySelector('.close-button');
    fireEvent.click(closeButton);
    expect(popUpElement).not.toBeInTheDocument();
})