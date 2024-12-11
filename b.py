import cv2
import numpy as np

def remove_background(image_path, output_path):
    # Read the image
    image = cv2.imread(image_path)
    if image is None:
        print("Could not read the image.")
        return

    # Convert image to grayscale
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    # Apply binary thresholding
    _, thresh = cv2.threshold(gray, 240, 255, cv2.THRESH_BINARY)

    # Invert the thresholded image
    thresh_inv = cv2.bitwise_not(thresh)

    # Use the thresholded image as a mask to segment the foreground
    foreground = cv2.bitwise_and(image, image, mask=thresh_inv)

    # Save the output image
    cv2.imwrite(output_path, foreground)

# Example usage
input_image_path = 'i1.jpg'
output_image_path = 'output_image.png'
remove_background(input_image_path, output_image_path)
